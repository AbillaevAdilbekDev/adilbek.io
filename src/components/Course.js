import './css/Course.css';
export default function CourseElement(){
  return(
    <div className='course'>
      <h1 className='header'>
        Bizin` platformada o`tiletin texnalogiyalar
      </h1>
      <div className='courses'>
        <a href='https://www.sammi.ac/course/foundation'>
          <h1 className='react react-dom'>
            Fundation
          </h1>
        </a>
        <a href='https://www.sammi.ac/course/typescript'>
          <h1 className='react'>
            TypeScript
          </h1>
        </a>
        <a href='https://www.sammi.ac/course/react'>
          <h1 className='react'>
            React.js
          </h1>
        </a>
        <a href='https://www.sammi.ac/course/vue'>
          <h1 className='react'>
            Vue.js
          </h1>
        </a>
        <a href='https://www.youtube.com/playlist?list=PL_WK6W0Gn1I7yfdRefzKcfpNIjYHPpi6G'>
          <h1 className='react'>
            Angular.js
          </h1>
        </a>
        <a href='https://www.sammi.ac/course/nestjs'>
          <h1 className='react'>
            Nest.js
          </h1>
        </a>
        <a href='https://www.sammi.ac/course/next'>
          <h1 className='react'>
            Next.js
          </h1>
        </a>
        <a href='https://www.youtube.com/playlist?list=PL8HkCX2C5h0XT3xWYn71TlsAAo0kizmVc'>
        <h1 className='react'>
          Nuxt.js
        </h1>
        </a>
      </div>
    </div>
  )
}