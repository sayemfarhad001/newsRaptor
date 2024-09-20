import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();

    }


    render() {
        let {title, description, imageUrl, newsUrl} = this.props;

        return (
        <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl ? imageUrl:"https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1280"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
        </div>
        )
    }
}

export default NewsItem
