var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var url = "https://api.desktoppr.co/1/wallpapers/random";
$.getJSON(url,function (err,data) {
    if(err!=unll){
        window.alert('something went wrong : '+err);
    }else{
        alert('Your query count : '+data.query.count);
    }
});