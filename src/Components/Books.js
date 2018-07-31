import React, { Component } from 'react';
import {Grid, Row, Col, PanelGroup, Panel, PanelHeading, PanelTitle, PanelBody} from 'react-bootstrap';

class Books extends Component {
  render() {
    let bookItems;
    if(this.props.books){
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        return (
            <Panel eventKey={id} key={id}>
                <Panel.Heading>
                    <Panel.Title toggle header={title}></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    
                </Panel.Body>
                Test
            </Panel>
        )
      });
    }
    return (
      <div>
        <PanelGroup accordion id="accordion-stuff">
          {bookItems}
        </PanelGroup>
      </div>
    );
  }
}

export default Books;
