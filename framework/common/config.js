const path = require ("path")
const merge= require("deepmerge")
// const { defaultConfig } = require("next/dist/server/config-shared")

function withFramworkConfig(defualtConfig={}){
    const framework ="shopify"
    
    
    const frameworkNextConfig =  require(path.join("../", framework, "next.config"))
    const config = merge(defaultConfig, frameworkNextConfig)

    return config
        
    }
    
module.exports = {withFramworkConfig}