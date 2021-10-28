module.exports = {
   output: {
     publicPath: '/React-social-network/build/',
   },

   devServer: {
      historyApiFallback: {
        rewrites: [{ from: /\/React-social-network\/[^?]/, to: '/404.html' }],
      },
    },
}