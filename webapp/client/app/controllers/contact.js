/**
 * Created by Bram on 7/11/2014.
 */
'use strict'

angular.module('webappApp')
    .controller('ContactCtrl', function ($scope, Contact) {
        var tran = Contact.transporter;

        $scope.contact = function (form) {
            $scope.submitted = true;
            console.log("topkek");
            if (form.$valid) {
                Contact.create({
                    onderwerp: $scope.contact.onderwerp,
                    bericht: $scope.contact.bericht,
                    sendDate: Date.now()
                    //sendBy:
                });

                tran
            }
        };

    });

/**

**/