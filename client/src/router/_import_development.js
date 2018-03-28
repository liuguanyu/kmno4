module.exports = file => {
    console.log(file)
    require('../@/components/' + file + '.vue').default // vue-loader at least v13.0.0+
}
