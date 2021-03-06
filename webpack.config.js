const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = async (env = {}) => {
    console.log(env);

    const isDev = env.development;
    const isProd = env.production;

    return {
        mode: isDev ? 'development' : 'production',
        bail: isProd,
        devtool: isDev ? 'inline-source-map' : 'source-map',
        entry: {
            krazyKatPeeking: path.join(__dirname, 'src/KrazyKatPeeking.tsx')
        },
        devServer: {
            clientLogLevel: 'none',
            contentBase:  './public',
            watchContentBase: true,
            compress: true,
            historyApiFallback: {
                disableDotRule: true
            },
            hot: true,
            port: 3002,
            publicPath: '/'
        },
        watch: env.watch,
        watchOptions: {
            aggregateTimeout: 500,
            ignored: [
                'build',
                'node_modules'
            ],
            poll: 1000
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            chunkFilename: 'static/js/[name].chunk.js',
            publicPath: '/',
        },
        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2
                        },
                        mangle: false,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        }
                    },
                    parallel: true,
                    cache: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        parser: safePostCssParser,
                        map: {
                            inline: false,
                            annotation: true
                        }
                    }
                })
            ],
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: 1,
                name: false
            },
            runtimeChunk: {
                name: entrypoint => entrypoint.name
            }
        },
        resolve: {
            extensions: [
                '.mjs',
                '.web.ts',
                '.ts',
                '.web.tsx',
                '.tsx',
                '.web.js',
                '.js',
                '.json',
                '.web.jsx',
                '.jsx',
            ]
        },
        module: {
            strictExportPresence: true,
            rules: [
                // lint
                {
                    test: /\.(js|jsx|mjs|ts|tsx)$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                                eslintPath: require.resolve('eslint')
                            },
                            loader: require.resolve('eslint-loader')
                        }
                    ],
                    include: path.resolve(__dirname + 'src')
                },
                {
                    oneOf: [
                        // "url" loader works just like "file" loader but it also embeds
                        // assets smaller than specified size as data URLs to avoid requests.
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 10000,
                                name: 'static/media[name].[hash:8].[ext]'
                            }
                        },
                        // Transpile TypeScript
                        {
                            test: /\.(ts|tsx)$/,
                            include: path.resolve(__dirname, 'src'),
                            use: [
                                {
                                    loader: require.resolve('ts-loader'),
                                    options: {
                                        transpileOnly: true,
                                    }
                                }
                            ]
                        },
                        // bundle module specific SCSS
                        {
                            test: /\.scss/,
                            exclude: [/styles.scss/],
                            use: [
                                {
                                    loader: require.resolve('style-loader')
                                },
                                {
                                    loader: require.resolve('@teamsupercell/typings-for-css-modules-loader')
                                },
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 3,
                                        sourceMap: true,
                                        localsConvention: 'camelCase',
                                        onlyLocals: isProd,
                                        modules: {
                                            mode: 'local',
                                            localIdentName: '[name]__[local]--[hash:base64:5]',
                                            hashPrefix: 'kkp',
                                        }
                                    }
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        sourceMap: true,
                                        ident: 'postcss',
                                        plugins: () => [
                                            require('postcss-normalize')
                                        ]
                                    }
                                },
                                {
                                    loader: require.resolve('resolve-url-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: require.resolve('sass-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                        // bundle global SCSS
                        {
                            test: /\.scss/,
                            include: [/styles.scss/],
                            use: [
                                {
                                    loader: require.resolve('style-loader')
                                },
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 3,
                                        sourceMap: true,
                                        modules: false
                                    }
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        sourceMap: true,
                                        ident: 'postcss',
                                        plugins: () => [
                                            require('postcss-normalize')
                                        ]
                                    }
                                },
                                {
                                    loader: require.resolve('resolve-url-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: require.resolve('sass-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                        // default file loader
                        {
                            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                            loader: require.resolve('file-loader'),
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        chunks: ['krazyKatPeeking'],
                        inject: true,
                        template: path.resolve(__dirname, 'public/index.html'),
                    },
                    isProd ? {
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeRedundantAttributes: true,
                            useShortDoctype: true,
                            removeEmptyAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            keepClosingSlash: true,
                            minifyJS: true,
                            minifyCSS: true,
                            minifyURLs: true,
                        },
                    } : undefined
                )
            ),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'build')
                }
            ]),
            new ModuleNotFoundPlugin(path.resolve(__dirname, '.')),
            new webpack.HotModuleReplacementPlugin(),
            isDev && new CaseSensitivePathsPlugin(),
            isDev && new WatchMissingNodeModulesPlugin(path.resolve(__dirname, 'node_modules')),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new ForkTsCheckerWebpackPlugin({
                typescript: resolve.sync('typescript', {
                    basedir: path.resolve(__dirname, 'node_modules')
                }),
                async: false,
                checkSyntacticErrors: true,
                eslint: true,
                formatter: typescriptFormatter,
                watch: path.resolve(__dirname, 'src'),
                silent: isProd
            }),
            new webpack.WatchIgnorePlugin([
                /scss\.d\.ts$/
            ])
        ].filter(Boolean)
    }
};
