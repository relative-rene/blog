angular
 .module('blog')
 .controller('ProfilesIndexController', ProfilesIndexController);

ProfilesIndexController.$inject = ['$http'];
function ProfilesIndexController ($http) {
 var vm = this;
 vm.newProfile = {};

 $http({
   method: 'GET',
   url: '/api/profiles'
 }).then(function successCallback(response) {
   vm.profiles = response.data;
 }, function errorCallback(response) {
   console.log('There was an error getting the data', response);
 });

 vm.createProfile = function () {
   $http({
     method: 'POST',
     url: '/api/profiles',
     data: vm.newProfile,
   }).then(function successCallback(response) {
     vm.profiles.push(response.data);
   }, function errorCallback(response) {
     console.log('There was an error posting the data', response);
   });
 };

 vm.editProfile = function (profile) {
   $http({
     method: 'PUT',
     url: '/api/profiles/'+profile._id,
     data: profile
   }).then(function successCallback(json) {
     // don't need to do anything!
   }, function errorCallback(response) {
     console.log('There was an error editing the data', response);
   });
 };

 vm.deleteProfile = function (profile) {
   $http({
     method: 'DELETE',
     url: '/api/profiles/'+ profile._id
   }).then(function successCallback(json) {
     var index = vm.profiles.indexOf(profile);
     vm.profiles.splice(index,1);
   }, function errorCallback(response) {
     console.log('There was an error deleting the data', response);
   });
 };

}
