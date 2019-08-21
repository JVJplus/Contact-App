var contactList = [
        {
                name: "Jay Prakash",
                phone: "983512415472"
        },
        {
                name: "Jitendra",
                phone: "812412461779"
        },
        {
                name: "Vikash",
                phone: "721235018"
        },
        {
                name: "Jyoti",
                phone: "82521276"
        },
        {
                name: "Manoj",
                phone: "1232423524"
        },
        {
                name: "abcsd1",
                phone: "1234098765"
        },
        {
                name: "random2",
                phone: "1234567890"
        }
]

function cmpByName(arr1, arr2) {
        var a=arr1.name.toLowerCase();
        var b=arr2.name.toLowerCase();
        
        if(a<b){
                return -1;
        }
        else if(b<a){
                return 1;
        }
        
        return 0;
}

contactList.sort(cmpByName);
console.log(contactList);

