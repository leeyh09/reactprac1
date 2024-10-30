import react from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom:48px;
    overflow-y: auto;
    background: gray;
`;
function TodoTemplate({children}) {
    return <TodoListBlock>TodoList</TodoListBlock>;
}
export default TodoList;