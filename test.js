angular.module('test', []).controller('DemoCtrl', function ($scope, $http) {
    $scope.selectedTestAccount = null;
    $scope.testAccounts = [];
    $scope.testAccounts =  [
                              {
                                "Id" : "1",
                                "Name" : "Dilanka"
                              }, 
                              {
                                "Id" : "2",
                                "Name" : "Shalika"
                              }
                            ];
                            
    $scope.availableTestAccount = null;
    $scope.availableAccounts = [];
    
    $scope.availableAccounts =  [
                              {
                                "Id" : "1",
                                "Name" : "Saumya"
                              }, 
                              {
                                "Id" : "2",
                                "Name" : "Anushka"
                              },
                              {
                                "Id" : "3",
                                "Name" : "Dharshi"
                              },
                              {
                                "Id" : "4",
                                "Name" : "Jayani"
                              },
                              {
                                "Id" : "5",
                                "Name" : "Chamika"
                              }
                            ];
    
                        
  /*   $scope.filter("myfilt", function() {
      return function (input,search) {
        var out = [], temp=[];
        if (search && search.locale) {
          angular.forEach(input,function (e) {
            if (search.locale.indexOf(e.locale)>=0 ) {
              temp.push(e);
            }
          })      
        } else {
          temp = input;
        }
        out = temp ;
        if (search && search.name) {
          out = [];
          angular.forEach(temp,function (e) {
            console.log(search.name,e.name);
            if (e.name.indexOf(search.name)>=0 ) {
              out.push(e);
            }
          });      
        }
      return out;
      };
    }) 
    */
    

    /*$http({
            method: 'GET',
            url: '/Admin/GetTestAccounts',
            data: { applicationId: 3 }
        }).success(function (result) {
        $scope.testAccounts = result;
    });
    */
    //var selectedItems = [];
    
    
     $scope.moveSelected = function() {
     //delete $scope.availableTestAccount.Id;
     
      //$scope.availableTestAccount= ['3','4'];
      //console.log($scope.availableTestAccount = $scope.availableTestAccount);
      //console.log($scope.selectedTestAccount.Id, $scope.selectedTestAccount.Name)
      //console.log($scope.selectedItems);
      angular.forEach($scope.availableTestAccount, function(entry){ 
      
        $scope.testAccounts.push(entry)
        $scope.removeAvailable(entry)   
      });
      
    

    }
    $scope.moveAll = function() {
     
      /** angular.forEach($scope.availableAccounts, function(entry){ 
      
        $scope.testAccounts.push(entry)
        $scope.removeAvailable(entry)   
      });
      
    **/
    $scope.testAccounts = $scope.testAccounts.concat($scope.availableAccounts);
    $scope.availableAccounts = [];

    }
    
    $scope.removeAvailable = function(item) {
    
        var index = $scope.availableAccounts.indexOf(item)
        
         
        $scope.availableAccounts.splice(index, 1);  
        console.log($scope.availableAccounts);  
    } 
    
    
});
