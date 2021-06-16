// import admin from "firebase-admin";
import { Handler, HandlerEvent } from "@netlify/functions";


// var serviceAccount = require("./config.json");

// if (admin.apps.length === 0) {
// 	admin.initializeApp({
// 		credential: admin.credential.cert(serviceAccount)
// 	})
// }


// const db = admin.firestore();
// const coursesCollections = db.collection("courses")

export const handler = async (event: HandlerEvent) => {
	// console.log(event.httpMethod);
	// switch (event.httpMethod) {
	// 	case "GET":
	// 		return getAll(event);
	// 	case "POST":
	// 		return addCourse(event);
	// 	case "PUT":
	// 		return updateCourse(event);
	// 	case "DELETE":
	// 		return deleteCourse(event);
	// 	default:
	// 		return getAll(event);
	// }
	return {
		statusCode: 500,
		body: {"data": "ok"}
	}
}

// const deleteCourse = async (context: HandlerEvent) => {
// 	try {
// 		const id = String(context.path).split('/api/courses/')[1];
// 		console.log(id);
// 		const data = await coursesCollections
// 		.doc(id)
// 		.delete();
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify({ data })
// 		};
// 	} catch (err) {
// 		console.log("[ERROR]", err);
// 		return {
// 			statusCode: 500,
// 			body: JSON.stringify({ error: err })
// 		};
// 	}
// }

// const updateCourse = async (context: HandlerEvent) => {
// 	try {
// 		const id = String(context.path).split('/api/courses/')
// 		console.log(id[1]);
// 		const body: any = context.body
// 		const data = await coursesCollections
// 		.doc(id[1])
// 		.update(JSON.parse(body))
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify({ data })
// 		};
// 	} catch (err) {
// 		console.log("[ERROR]", err);
// 		return {
// 			statusCode: 500,
// 			body: JSON.stringify({ error: err })
// 		};
// 	}
// }

// const addCourse = async (context: HandlerEvent) => {
// 	try {
// 		const body: any = context.body
// 		const data = JSON.parse(body)
// 		console.log(data);
// 		const res = await coursesCollections.add(data);
// 		return {
// 			statusCode: 201,
// 			body: JSON.stringify({ data: res })
// 		};
// 	} catch (err) {
// 		console.log("[ERROR]", err);
// 		return {
// 			statusCode: 500,
// 			body: JSON.stringify({ error: err })
// 		};
// 	}
// }


// const getAll = async (context: HandlerEvent) => {
// 	try {
// 		const c = await coursesCollections.get()
// 		let data: any[] = []
// 		c.forEach((doc) => {
// 			data.push({ ...doc.data(), id: doc.id })
// 		});
		
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify({ data }),
			
// 		};
// 	} catch (err) {
// 		console.log("[ERROR]", err);
// 		return {
// 			statusCode: 500,
// 			body: JSON.stringify({ error: err })
// 		};
// 	}
// }