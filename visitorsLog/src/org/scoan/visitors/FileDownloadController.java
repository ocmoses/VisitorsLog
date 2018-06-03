package org.scoan.visitors;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FileDownloadController {
	
	private static final String DEFAULT_IMG = "/visitorsLog/images/profile.png";
	private static final String DEFAULT_IMG_PATH = "http://localhost:8080/visitorsLog/images/profile.png";
	private static final String MAC_TOMCAT_ROOT = "/Applications/tomcat";
	private static final String WINDOWS_TOMCAT_ROOT = "C:\\Tomcat";
	
	private static String getRoot() {
		String root = System.getProperty("os.name");
		System.out.println("Root is: " + root);
		if(root.contains("Mac"))
			return MAC_TOMCAT_ROOT;
		else if(root.contains("Windows"))
			return WINDOWS_TOMCAT_ROOT;
		else
			return null;
	}
	
	@RequestMapping(value="/get-image/{imageId}", method=RequestMethod.GET)
	@ResponseBody
	public byte[] getImage(@PathVariable("imageId") String imageId, HttpServletRequest request) {
		//String rpath = request.getRealPath("/");
		String rpath = getRoot() + File.separator + "visitors" + File.separator + "images" + File.separator + imageId; // whatever path you used for storing the file
		Path path = Paths.get(rpath);
		byte[] data = null;
		try {
			data = Files.readAllBytes(path);
		} catch (IOException e) {
			
			e.printStackTrace();
		} 
		return data;
		
	}
	
	@RequestMapping(value="/get-uploaded-image", method=RequestMethod.GET)
	@ResponseBody
	public byte[] getUploadedImage(@RequestParam("image") String image, @RequestParam("page") String page) {
		
		String folder = null;
		
		switch(page) {
		case "manage-users": folder = "users"; 
		case "user-details": folder = "users";
		case "settings": folder = "users"; break;
		case "manage-visitors": folder = "visitors"; 
		case "visitor-details": folder = "visitors"; break;
	}

		
		String rootPath = System.getProperty("catalina.home");
		File dir = new File(rootPath + File.separator + ((folder == null) ? "default" : folder ) + File.separator + "images");
		
		if (!dir.exists())
			dir.mkdirs();
		
		String rPath = dir + File.separator + image; 
		Path path = Paths.get(rPath);
		
		//System.out.println("The actual file path: " + rPath);
		
		byte[] data = null;
		try {
			data = Files.readAllBytes(path);
		} catch (IOException e) {
			
			e.printStackTrace();
		} 
		return data;				
		
	}
	
	
	public static String getImageAbsolutePath(String imageString) {
		System.out.println("Image string is default: " + imageString.equals(DEFAULT_IMG));
		if(!imageString.equals(DEFAULT_IMG)) {
			String folder = null;
			String image = (imageString.split("&")[0]).split("=")[1];
			String userOrVisitor = imageString.split("&page=")[1];
			System.out.println("image: " + image + ", user or visitor: " + userOrVisitor);
			
			switch(userOrVisitor) {
				case "manage-users": folder = "users";
				case "user-details": folder = "users";
				case "settings": folder = "users"; break;
				case "manage-visitors": folder = "visitors";
				case "visitor-details": folder = "visitors";
			}
			
			//String rootPath = System.getProperty("catalina.home");   //Very tricky thing============================================================================
			
			File dir = new File(getRoot() + File.separator + ((folder == null) ? "default" : folder ) + File.separator + "images");
			System.out.println("What directory it resolved to: " + dir);
			
			return dir + File.separator + image; 
		}else
			return DEFAULT_IMG_PATH;
		
		
	}

}
