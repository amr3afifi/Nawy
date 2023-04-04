function Footer(){
    return (
        <footer >
        <h6>Powered by<a href="https://www.nawy.com/">Nawy!</a></h6>

            <style jsx>{`

                        footer {
                            width: 100%;
                            height: 70px;
                            border-top: 1px solid #eaeaea;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        footer a,img {
                            text-decoration: none;
                            color: #0070f3;
                            margin-left: 0.5rem;
                        }
            `}</style>
      </footer>
    )
}

export default Footer
