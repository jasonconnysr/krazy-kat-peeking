import JsonError, { JSON_ERROR } from './errors/JsonError';
import ApiError, { API_ERROR } from './errors/ApiError';
import NetworkError, { NETWORK_ERROR } from './errors/NetworkError';

export const defaultOptions = Object.freeze({
    headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }),
    // credentials: 'include',
});

/**
 * Wrapper around window.index that checks for the 3 types of common errors that can occur:
 *
 * - Networking
 * - JSON formatting
 * - Browser blocking
 * @param {string} url
 * @param options
 * @returns {Promise<any>}
 */
export const Fetcher = async (url: string, options: any = {}): Promise<any> => {
    try {
        const res = await window.fetch(url, Object.assign({}, defaultOptions, options));
        try {
            if (res.status === 204) {
                console.log(res);
                return null;
            }
            if (res.status === 403) {
                // emit event not authorized
                let event = document.createEvent('Event');
                event.initEvent('lowSecLogin', true, true);
                document.dispatchEvent(event);
            }
            const json = await res.json();
            if (res.ok && json !== null) {
                return json;
            } else {
                throw new ApiError({...res, ...json});
            }
        } catch (error) {
            if (error.type === API_ERROR) {
                throw error;
            }
            if (res.status === 200) {
                throw new JsonError (error);
            } else {
                throw new NetworkError(error);
            }
        }
    } catch (error) {
        if (error.type === API_ERROR || error.type === JSON_ERROR || error.type === NETWORK_ERROR) {
            throw error;
        }
        let networkError =  new NetworkError(error);
        throw networkError;
    }
}
