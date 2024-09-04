import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Pagination, Button } from 'react-bootstrap';

export default function ManageContacts({ setIsActive, isActive }) {
  const [contacts, setContacts] = useState([
    { name: 'John Doe', email: 'john@example.com', contact: 'Phone', query: 'Inquiry about cakes' },
    { name: 'Jane Smith', email: 'jane@example.com', contact: 'Email', query: 'Cake customization' },
    { name: 'Anna Taylor', email: 'anna@example.com', contact: 'Phone', query: 'Delivery issue' },
    // Add more contacts here
  ]);

  // Function to delete a specific contact by index
  const deleteContact = (indexToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="bg-gradient">
      <main
        id="main"
        className={`main mainWrapper ${isActive === true && 'active'}`}
        style={{
          background: 'linear-gradient(135deg, #f06, #ffcc00)',
          minHeight: '100vh',
          padding: '20px'
        }}
      >
        <div className="container py-5">
          <h1 className="text-center text-white mb-4">Manage Contacts</h1>
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                  <Card className="shadow-sm rounded-lg border-light">
                    <Card.Body>
                      <Card.Title className="text-primary">{contact.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{contact.email}</Card.Subtitle>
                      <Card.Text>
                        <strong>Contact Option:</strong> {contact.contact}
                      </Card.Text>
                      <Card.Text>
                        <strong>Query:</strong> {contact.query}
                      </Card.Text>
                      {/* Delete button to delete this specific card */}
                      <Button variant="danger" onClick={() => deleteContact(index)}>
                        Delete Details
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div className="col-12">
                <h3 className="text-center text-white">No contacts available</h3>
              </div>
            )}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  );
}
