import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 'zOfku', //unique article id
    headline: "Test Headline", //title of article
    createdOn: '1921-12-05T12:00:21-05:00', //timestamp of when article was added
    summary: "This is a summary for the test", //short summary statement of article
    body: "something very interesting..."  //paragraph of article text
}

test('renders component without errors', ()=> {
    // render(<Article />);
   
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);
    //arrange
    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');
    //act
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    //assert
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle} />);
    const author = screen.queryByTestId('author');
    expect(author).toHaveTextContent(/Associated Press/i);
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={handleDelete}/>);
    const deleteBtn = screen.queryByTestId('deleteButton');
    userEvent.click(deleteBtn);
    expect(handleDelete).toHaveBeenCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.