const qiniu = require('qiniu')
 
// 创建上传凭证
const accessKey = ''    //七牛的accessKey 
const secretKey = ''    //七牛的secretKey 
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
    scope: '',         //对象存储空间名字
    expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)
 
//服务器直传
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;
 
//图片的地址
var bucketManager = new qiniu.rs.BucketManager(mac, config);
var privateBucketDomain = ''; //七牛中自己配置的域名地址
var deadline = parseInt(Date.now() / 1000) + 3600000; // 永不过期
 
const getFileUrl = (key)=>{
    return bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
 
}
 
module.exports = {
    uploadToken,
    config,
    getFileUrl
}
