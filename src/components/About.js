import React, { Component } from "react";


export class About extends Component {
// export default function About(props) {
    // const [this.myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = () => {
    //     if(this.myStyle.color === 'black') {
    //       setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '1px solid white'
    //       })
    //       setBtnText('Enable light mode')  

    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //           })  
    //         setBtnText('Enable dark mode')  
    //     }    
    // }

    myStyle = {
      color: this.props.mode === 'dark'?'white':'#042743',
      backgroundColor: this.props.mode === 'dark'?'rgb(36 74 104)':'white'
    }


render () {
    return (
      <div className="container">
        <h1 className="container my-3" style={{color: this.props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={this.myStyle}>
          <div className="accordion-item" style={this.myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={this.myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={this.myStyle}>
              Our tool offers in-depth text analysis, breaking down your writing to identify key patterns, structures, and potential improvements. With advanced algorithms, we provide actionable insights to enhance clarity, coherence, and style. Elevate your text with precise feedback tailored to your specific needs.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={this.myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={this.myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={this.myStyle}>
              Enjoy full access to our text analysis tool at no cost. We believe in empowering everyone with the resources to refine their writing without any financial barriers. Start improving your text today without any hidden fees or subscriptions.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={this.myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={this.myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={this.myStyle}>
              Our tool is designed to work seamlessly across all major web browsers. Whether you’re using Chrome, Firefox, Safari, or Edge, you’ll experience smooth and efficient text analysis. No need for additional software—just open your browser and get started.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>
                {btnText}
            </button>
        </div> */}
      </div>
    ) 
  };
  

}

export default About;