import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/postsRedux';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const RemoveConfirm = ({handleClose, showModal, id}) => {

  const myDispatch = useDispatch();

  const handleDelete = () => {
    myDispatch(removePost(id));
    handleClose();
  }
  return (
    <>
      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Nav.Link as={NavLink} to="/"><Button variant="danger" onClick={handleDelete}>Delete</Button></Nav.Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RemoveConfirm;