import React from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Location from '../../pages/Location';
import { MainContainer,
         ContactsContainer,
         SendMessageContainer,
         SendMessageInfo,
         SendMessageForm,
         Label,
         Input,
         TextArea,
         SideBar,
         SideBarContainer,
         SideBarTitle,
         SideBarContent,
         SideBarSocialMediaContainer } from './styles';
         import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ContactPage() {
    const sendMessage = function (e){
        e.preventDefault();
    }

    return (
        <MainContainer>
            <Title>Contatos</Title>
            <ContactsContainer>
                <SendMessageContainer>
                    <SendMessageInfo>Nos mande uma mensagem!<br /> Adoraríamos ouvir o que você tem para nos dizer!</SendMessageInfo>
                    <SendMessageForm onSubmit={sendMessage}>
                        <Label>Nome</Label>
                        <Input type="text" name="name" id="name_contact" />
                        <Label>Email</Label>
                        <Input type="email" name="email" id="email_contact" />
                        <Label>Mensagem</Label>
                        <TextArea name="message" id="message_contact" />
                        <Button width="50%">Enviar mensagem</Button>
                    </SendMessageForm>
                </SendMessageContainer>
                <SideBar>
                    <SideBarContainer>
                        <SideBarTitle>Contatos</SideBarTitle>
                        <SideBarContent>(47)99999-9999</SideBarContent>
                        <SideBarContent>(47)99999-9999</SideBarContent>
                    </SideBarContainer>

                    <SideBarContainer>
                        <SideBarTitle>Endereço</SideBarTitle>
                        <SideBarContent>Rua XXXXXXXXX, 111</SideBarContent>
                        <SideBarContent>Blumenau, Santa Catarina, Brasil</SideBarContent>
                    </SideBarContainer>

                    <SideBarSocialMediaContainer>
                        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]}  />
                        <FontAwesomeIcon size="2x" icon={["fab", "instagram"]}  />
                    </SideBarSocialMediaContainer>
                </SideBar>
            </ContactsContainer>
            <Location />
        </MainContainer>
    );
}