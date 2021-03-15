import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 0 var(--base-padding);
`;

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    width: 100%;
`;

export const SendMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 75%;
`;

export const SendMessageForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
`;

export const SendMessageInfo = styled.p`
    font-size: 18px;

    margin-bottom: 30px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
`;

export const Input = styled.input`
    font-size: 16px;
    padding: 10px;
    width: 50%;

    margin-bottom: 15px;
`;

export const TextArea = styled.textarea`
    font-size: 16px;
    padding: 10px;

    margin-bottom: 15px;

    width: 50%;
    max-width: 100%;

    height: 300px;
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;

    padding: 30px;
`;

export const SideBarContainer = styled.div`
    margin-bottom: 15px;
`;

export const SideBarTitle = styled.p`
    font-weight: bold;
    font-size: 18px;

    padding: 3px 0;
`;

export const SideBarContent = styled.p`
    padding: 5px 0;

    font-size: 16px;
`;

export const SideBarSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;

    & > * {
        margin: 0 5px;
    }
`;