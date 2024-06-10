let user = {
    name: 'Sebastian',
    email: 'sleam.sebi@yahoo.com',
    gender: 'male',
    getDetails: function() {
        console.log(`Name: ${user.name}, Email: ${user.email}, Gender: ${user.gender}`);
    }
};

user.getDetails();