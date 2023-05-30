import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/gelion');
 * {
  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    max-width: 1920px;
    margin: 0 auto;
    
  }
  h1,h2,h3,h4,h5,h6,p{
    font-family: 'Gelion', sans-serif;

  }
  img,svg{
    max-width: 100%;
    height: auto;

  }
ul{
  font-family: 'Gelion', sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    color:${theme.colors.primary};
    
    
}
a{
  color:${theme.colors.primary};
  text-decoration: none;
  font-family: 'Gelion', sans-serif;
  text-transform: uppercase;
}

.container{
  display: flex;
    gap: ${theme.spacing.xlarge};
    justify-content: center;
    align-items: center;
    height: 90vh;

    @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: ${theme.spacing.medium};
    h1{
        font-size: ${theme.fontSizes.small};
    }
    .widget-login__title{
      text-align: center;
    }

    }
}

#light {
    background-color: #f2f4f1;
}

#dark {
    background-color: #f2f4f1;
}

/* .widget-login-account{
  display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 100%;
height: 100vh;
}
.widget-login{
display: flex;
flex-direction: column;
gap: 20px;

}
.widget-container{
  &__title{
text-align: center;
padding-bottom: ${theme.spacing.large};
 }
} */
.widget-layout{

}
.widget-sidebarleft{
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 380px;
  margin: 20px 10px 20px 10px;
  height: 95vh;
  align-items: center;
  text-align: center;
  &__user{
    margin: 40px;
    width: 35%;
  }

  
}
.react-calendar { 
margin-top: 10px;
 width: 350px;
 max-width: 100%;
 background-color: #fff;
 color: #222;
 border-radius: 8px;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
 color: #6f48eb;
 min-width: 44px;
 background: none;
 font-size: 16px;
 margin-top: 8px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
 font-size: 8px;
 font-family: 'Gelion', sans-serif;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #6f48eb;

}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #6f48eb;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #6f48eb;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #6f48eb;
 color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 0;
}
.react-calendar__tile--rangeStart {
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-top-left-radius: 6px;
 border-bottom-left-radius: 6px;
 background: #6f48eb;
 color: white;
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 background: #6f48eb;
 color: white;
}
.widget-sidebar{
  
  /* background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh; */
  
  
  &__logo{
    text-align: center;
    margin: 15px;
  }
  &__menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

  }
  &__menulist{
    gap: 50px;
    display: flex;
    flex-direction: column;

  }
  &__user{
    width: 25%;
  }
}
.test1{
  display: flex;
}

.widget-card{
  background-color: ${theme.colors.background};
  margin-top: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 300px;
  height: auto;
  border-radius: 10px;
  border: 2px solid transparent;

  &__description,p,h1{
  text-align: center;
}
}


/* .widget-container-Head{
  
   width: 100%;
   max-height: 100vh;
   margin: 23px;
  &__list{
    display: flex;
    justify-content: center;
    gap: 56px;
    align-items: center;
    margin: 30px;
  
  }
  &__search{
    width: 320px;
   
  
  }
  &__btnc{
    text-align: end;
  }
  &__description{
   

  }
  &__imag1{
  width: 30px;
  }
  &__form{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}
.widget-container__head{
  border-bottom:3px solid white;
}

.test10{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  color: red;
} */




`;

export default GlobalStyle;