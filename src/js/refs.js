const refs = {
  searchForm: document.querySelector(`.search-form`),
  input: document.querySelector(`input`),
  ul: document.querySelector(`.gallery`),
  modalDiv: document.querySelector(`.lightbox`),
  modalDivButton: document.querySelector(`button[data-action="close-lightbox"]`),
  modalImg: document.querySelector(`.modal-img`),
  addPictures: document.querySelector(`.add-more`),
};

export const { searchForm, input, ul, modalImg, modalDivButton, modalDiv, addPictures } = refs;
