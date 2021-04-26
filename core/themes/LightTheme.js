const Colors = {
    Primary: 'rgb(25, 118, 210)',
    Secondary: 'rgba(0, 0, 0, 0.54)',
    Success: 'rgb(76, 175, 80)',
    Warning:'rgb(255, 152, 0)',
    Error: 'rgb(244, 67, 54)',
    Info: 'rgb(33, 150, 243)',
    Link: 'rgba(0, 0, 0, 0.87)',
    Title: 'rgba(0, 0, 0, 0.87)',
    Subtitle :'rgba(0, 0, 0, 0.54)',
    White: '#fff',
    Black: '#000'
};

export default {
    Name: 'light',
    barStyle :'dark',
    ...Colors,
    AppBar: {
        Background: Colors.White,
        Foreground: Colors.Title,
        Shadow: {
            opacity: 0.05,
            border: 5
        }
    }
}