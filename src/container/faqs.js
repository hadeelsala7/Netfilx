import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';


export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequntky Asked Questions</Accordion.Title>
            
            {faqsData.map(items =>
                <Accordion.Item key={items.id}>
                    <Accordion.Header>
                        {items.header}
                    </Accordion.Header>
                    <Accordion.Body>
                        {items.body}
                    </Accordion.Body>
                </Accordion.Item>
            )}
            <Accordion.Item>

            </Accordion.Item>
        </Accordion>

    )
}