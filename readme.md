#uniapp 跨域问题
1.选择Vue2 版本 在manifest.json 中配置devServer
"h5" : {
	    "devServer" : {
	        "port" : 5173, //浏览器运行端口
	        "https" : false,
	        "proxy" : {
	            "/aaaaaaa" : {
	                "target" : "https://hu.acotech.my:50011",
	                "changeOrigin" : true,
	                "secure" : false,
	                "ws" : false,
	                "pathRewrite" : {
	                    "^/aaaaaaa" : ""
	                }
	            }
	        }
	    }
	},

 2.选择Vue3版本，需新建vite.config.js配置devServer

 
