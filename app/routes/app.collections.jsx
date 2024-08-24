import { Layout, Page } from '@shopify/polaris'
import React, { useEffect } from 'react'
import { apiVersion, authenticate } from '../shopify.server'
import { useLoaderData } from '@remix-run/react'
import { json } from "@remix-run/node";

export const query = `{
    collections(first:10){
        nodes {
            id
        }
    }
}`

export const loader = async ({request}) => {
    const { session } = await authenticate.admin(request)
    const { shop, accessToken } = session
    try {
        const response = await fetch(`https://${shop}/admin/api/${apiVersion}/graphql.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": accessToken
            },
            body: query
        })
        if(response.ok){
            const data = await response.json()
            return json({collections: data})
        }

        return null
    } catch (error) {
        console.log(error)        
    }
}

const Collections = () => {
    const collections = useLoaderData()
  return (
    <Page>
        <Layout>
            Abd
        </Layout>
    </Page>
  )
}

export default Collections
