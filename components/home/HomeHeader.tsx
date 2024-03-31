import React from 'react'
import Link from 'next/link'
const HomeHeader = () => {
    return (
        <>
            <Link
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#ff6422"
                }}

                href="/">Store</Link>
            <Link
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#ff6422"
                }}
                href="/">Electronics</Link>
            <Link
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#ff6422"
                }}
                href="/">Watches</Link>
        </>
    )
}

export default HomeHeader