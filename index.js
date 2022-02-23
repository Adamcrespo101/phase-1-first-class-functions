 function receivesAFunction (spy){
     return spy();
 }

 function returnsANamedFunction (){
    const name = receivesAFunction    
        return name ;
    }

    function returnsAnAnonymousFunction () {
        return (function (){})
    }