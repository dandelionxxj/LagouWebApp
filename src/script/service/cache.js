/**
 * Created by asussl on 2017/3/5.
 */
'use strict';
angular.module('app')
    .service('cache',['$cookies',function ($cookies) {
    this.put=function (key,value) {
        $cookies.put(key,value);
    };
    this.get=function(key){
        return $cookies.get(key);
    };
    this.remove=function(key){
        return $cookies.remove(key);
    };
}]);
// .factory('cache',['$cookies',function ($cookies) {
//     return{
//         put:function (key,value) {
//             $cookies.put(key,value);
//         },
//         get:function(key){
//             $cookies.get(key);
//         },
//         remove:function(key){
//             $cookies.remove(key)
//         }
//     }
// }]);