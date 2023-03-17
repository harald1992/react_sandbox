import { render, screen } from "@testing-library/react";
import Notes from "./Notes";
import { deleteIndex } from "./NotesFunctions";



test('notes test 1', () => {
    render(<Notes />);
    const noNotesText = screen.getByText('Create one now');
    expect(noNotesText).toBeInTheDocument();
})

test('deleteIndex function', () => {
    const array = [{ id: 1, body: 'asd' }, { id: 2, body: 'asdasd' }, { id: 3, body: '123' }];
    const index = 1;
    const expectedResult = [{ id: 1, body: 'asd' }, { id: 3, body: '123' }];

    let result = deleteIndex(array, index);
    expect(result).toEqual(expectedResult);
})

test('deleteIndex function 2', () => {
    const array = [{ id: 1, body: 'asd' }, { id: 2, body: 'asdasd' }, { id: 3, body: '123' }];
    const index = 0;
    const expectedResult = [{ id: 2, body: 'asdasd' }, { id: 3, body: '123' }];

    let result = deleteIndex(array, index);
    expect(result).toEqual(expectedResult);
})