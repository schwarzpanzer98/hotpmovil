import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import styles from '../styles/Table.module.css';
import { IconButton, TextField, InputAdornment, Checkbox  } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import * as React from 'react';

function Table() {
  const [posts, setPosts] = useState({blogs: []})

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    
      setPosts({blogs: data})
      console.log(data)
    }
    fetchPostList()
  }, [setPosts])

  

  return (
 <>
    <div className={styles.header}>
    <div className={styles.titulo}><h2><b>Paginas</b></h2>
    </div>
    <div className={styles.divBotoes}>
              <div className={styles.botoes} >
              <button type="button" class="btn btn-outline-primary">
                Subir HTML
              </button>
{/*               // VER COM TIAGO */}
             <button style={{marginLeft: '10px'}}class="btn btn-primary ">
                Criar Landing
              </button>
             </div>
             </div>
    </div>
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-3 bg-body rounded"> 
          <div className={styles.opcoes}>
              <div className={styles.selectBoxes}>
              <p className={styles.tipografiaBoxes} ><strong>Ação:</strong></p>
              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Escolher</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
                <p className={styles.tipografiaBoxes}><strong>Filtrar:</strong></p>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
                <p className={styles.tipografiaBoxes} ><strong>Ordernar:</strong></p>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
              </div>
              <div className={styles.procura} >
              <form>
              <TextField
  label="Procurar"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
              </form>
              </div>
           </div>  
                 <table class="table table-striped table-hover ">
                    <thead>
                        <tr className={styles.tr}>
                            <th>Nome </th>
                            <th>Email</th>
                            <th>Numero</th>
                            <th>User</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className={styles.d}>
                        {
                          posts.blogs && posts.blogs.map((item) => (
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>
                               <IconButton
                               className={styles.preview}
                               >
                                <VisibilityIcon />   
                               </IconButton>

                                <IconButton
                                className={styles.edit}
                                >
                                 <EditIcon />   
                                </IconButton>

                                <IconButton
                                > 
                                <DeleteIcon />  
                                </IconButton>
                            </td>
                        </tr>
                            ))
                        }
                    </tbody>


                    <tbody>
                    <td className={styles.tbody}></td>
                    </tbody>
                </table>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
      </>
  );
}

 
export default Table;