import React from 'react';
// import ReactPDF from "@react-pdf/renderer";
import { Page, Document,Text, View,  } from '@react-pdf/renderer';
// import { PDFDownloadLink, PDFViewer, Page, Document,Text } from '@react-pdf/renderer';
// import {Document , Page,  } from 'react-pdf'

// const styles = <StyleSheet className="creat"></StyleSheet>

const PDFFile = () => {
    return (
        <div>
            
            <Document>
                <Page>
                    
                        <View>
                            <Text>
                                nahid
                            </Text>
                        </View>
                            
                </Page>
            </Document>
           
        </div>
    );
};

export default PDFFile;