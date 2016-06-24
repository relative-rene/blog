angular
 .module('blog')
 .controller('ProfilesEventsIndexController', ProfilesEventsIndexController);

ProfilesEventsIndexController.$inject = ['$http'];
function ProfilesEventsIndexController ($http) {
 var vm = this;
 vm.newProfile = {};

 $http({
   method: 'GET',
   url: '/api/profilesEvents'
 }).then(function successCallback(response) {
   vm.profilesEvents = response.data;
 }, function errorCallback(response) {
   console.log('There was an error getting the data', response);
 });

 vm.createProfile = function () {
   $http({
     method: 'POST',
     url: '/api/profilesEvents',
     data: vm.newProfile,
   }).then(function successCallback(response) {
     vm.profilesEvents.push(response.data);
   }, function errorCallback(response) {
     console.log('There was an error posting the data', response);
   });
 };

 vm.editProfile = function (profile) {
   $http({
     method: 'PUT',
     url: '/api/profilesEvents/'+profile._id,
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
     url: '/api/profilesEvents/'+ profile._id
   }).then(function successCallback(json) {
     var index = vm.profilesEvents.indexOf(profile);
     vm.profilesEvents.splice(index,1);
   }, function errorCallback(response) {
     console.log('There was an error deleting the data', response);
   });
 };

}
