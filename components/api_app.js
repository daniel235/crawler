import React from 'react';

class get_outlook_data extends React.Component {
    constructor(props) {
        this.state = {
            loading: true,
            dataSource: []
        };
    }

    auth = function(params) {
        fetch("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ba9633d6-4d45-4d8b-abc2-06ffcbcf74bf&response_type=code&scope=openid+Mail.Read");
    }

    
}