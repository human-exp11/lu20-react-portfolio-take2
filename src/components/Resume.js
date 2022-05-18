import React from 'react'
import 'semantic-ui-css/semantic.js';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Grid,} from 'semantic-ui-react'
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import LUResume from '../assets/LUR.pdf'

const Resume = () => {
  return(
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header className='header' as='h1'>Résumé</Header>
            <Document file={LUResume}>
              <Page pageNumber={1} />
            </Document>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>            
        </Grid.Row>
      </Grid>
    </Container>

  )
}
 export default Resume


