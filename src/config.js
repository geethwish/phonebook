export const apiDomain='http://localhost';
export const loginurl='/oauth/token';
export const userurl=apiDomain+'/api/user';
export const logincheck=apiDomain+loginurl;
export const Registerurl=apiDomain+'/api/register';
export const ContactsUrl=apiDomain+'/api/ct';
export const NotesUrl=apiDomain+'/api/note';
export const CatogryUrl=apiDomain+'/api/cat';
export const CatogryAddUrl=apiDomain+'/api/catadd';
export const ContactUpdateUrl=apiDomain+'/phonebook/';
export const AddNoteUrl=apiDomain+'/api/addnotes';
export const UpdateNoteUrl=apiDomain+'/notebook/';
export const DeleteNoteUrl=apiDomain+'/notebook';
export const UpdateCatUrl=apiDomain+'/category/';
export const DeleteCatUrl=apiDomain+'/category/';

export const getHeader = function ()
{
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  const headers =
  {
    'Accept': 'application/json',
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
   
  return headers;
}
    
