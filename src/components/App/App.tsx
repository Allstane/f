import { Chapter, dummyCh, Book, dummyB} from './../Chapter'
import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import './App.css'
import {instance} from './../AxiosInstance'

function App() {

   const {ChId, LBId, RBId} = useParams();
   const [leftBook, setLeftBook] = useState<Book>(dummyB)
   const [rightBook, setRightBook] = useState<Book>(dummyB)
   const [leftChapter, setLeftChapter] = useState<Chapter>(dummyCh)
   const [rightChapter, setRightChapter] = useState<Chapter>(dummyCh)

   interface IApplicationProps {}
   function getBook() {
         instance.get<Book>('/book/'+Number(LBId)).then((response) => {console.log(response); setLeftBook(response.data) } )
         instance.get<Book>('/book/'+Number(RBId)).then((response) => {console.log(response); setRightBook(response.data) } )
         return <></>
   }

   function getChapter() {
         instance.get<Chapter>('/book/'+Number(LBId)+'/chapter/'+Number(ChId))
          .then((response) => {console.log(response); setLeftChapter(response.data) } )
         instance.get<Chapter>('/book/'+Number(RBId)+'/chapter/'+Number(ChId))
          .then((response) => {console.log(response); setRightChapter(response.data) } )
          return <></>
   }

   const MainTable: React.FunctionComponent<IApplicationProps> = (props) => {
              return <>{getBook()} {getChapter()}
              <table width='800'><tr><td width='45%' valign='top'>{leftBook.author} "{leftBook.title}"</td>
                                     <td width='10%'></td>
                                     <td width='45%' valign='top'>{rightBook.author} "{rightBook.title}"</td></tr>
                     <tr><td>{leftChapter.title}</td><td width='10%'></td><td>{rightChapter.title}</td></tr>
                     <tr><td valign='top' align='justify'>{leftChapter.txt}</td><td></td>
                         <td  valign='top' align='justify'>{rightChapter.txt}</td></tr></table></>
   }

   return (
    <body>
      <header className="App-header">
        <p>Project - Library</p>
      </header>
      <main className="App-main">
        <p></p>
        <p>{<MainTable />}</p>
      </main>
      <footer className="App-footer">
        <p>Footer part</p>
      </footer>
    </body>
    );
}
export default App;