$(document).on('ready.responsive', function(event) {
    $.screen({
        state : [{
            name : 'wide',
            horizontal : {
                from : 9999,
                to : 1201
            }
        }, {
            name : 'web',
            horizontal : {
                from : 1200,
                to : 1001
            }
        }, {
            name : 'tablet',
            horizontal : {
                from : 1000,
                to : 641
            }
        }, {
            name : 'phone',
            horizontal : {
                from : 640,
                to : 0
            }
        }, {
			name : 'maxheight',
			vertical : {
				from : 9999,
				to : 850
			}
		}, {
			name : 'minheight',
			vertical : {
				from : 849,
				to : 0
			}
		}]
    });
});

// 네이버 api 키
var naverID = 
{
    clientID : 'nzvx29b3rw'
};