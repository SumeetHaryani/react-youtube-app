import React from 'react';
import { Input, InputGroup, Button, InputGroupAddon } from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <Form
        className="border p-4 rounded  mb-3 shadow-sm"
        onSubmit={this.onFormSubmit}
      >
        <FormGroup>
          <Label for="search">Youtube Videos</Label>
          <InputGroup>
            <Input
              type="text"
              name="text"
              id="search"
              placeholder="Search Videos"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
            <InputGroupAddon addonType="prepend">
              <Button color="primary" className="search-button rounded-right">
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}
export default SearchBar;
