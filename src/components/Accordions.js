import React from 'react';

import Accordion from './Accordion';

function Accordions() {
  return (
    <div id="policy" className="MainAccordion">
      <h1 className="Accordions">Policy &amp; FAQs</h1>
      <Accordion allowMultipleOpen>
        <div label='Doggie Duties &amp; Requirements:' isOpen>
          <p>&bull; Puppies must be at least 7 months old to join our pack.</p>
          <p>&bull; Clients must provide documentation of all up-to-date vaccinations.</p>
          <p>&bull; Clients must provide documentation of ongoing flea, heartworm and tick prevention treatment.</p>
          <p>&bull; Clients must inform Dog Tales about allergies.</p>
        </div>
        <div label='Weekend &amp; After hours Scheduling:'>
          <p>&bull; Walks booked outside the hours of operation (Monday - Friday from 9 to 5pm) are 1.5x the hourly rate.</p>
        </div>
        <div label='Holiday Rates:'>
          <p>&bull; Boarding and walks booked on holidays are 2x the hourly or nightly rate.</p>
        </div>
        <div label='Boarding Policy'>
          <p>&bull; Clients need to provide sufficient dog food for the entire boarding duration.</p>
          <p>&bull; Clients will be picked up and dropped off during our hours of operation.</p>
        </div>
        <div label='Billing Policy'>
          <p>&bull; Invoices are sent on a weekly basis and are due upon receipt.</p>
          <p>&bull; Late fees will be applied for overdue invoices after a 3-day grace period.</p>
          <p>&bull; Service will be interrupted for unpaid invoices past 7 days from due date.</p>
        </div>
        <div label='Cancellation Policy'>
          <p>&bull; No fees or additional cost will be applied for cancellations but a 24 hour notice is always appreciated</p>
        </div>
      </Accordion>
    </div>
  );
}

export default Accordions;
