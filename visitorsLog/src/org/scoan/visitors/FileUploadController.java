package org.scoan.visitors;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;

@Controller
public class FileUploadController {
	
	@Autowired
	MultipartResolver multipartResolver;
	
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

	/**
	 * Upload single file using Spring Controller
	 */
	@RequestMapping(value = "/upload-pic", method = RequestMethod.POST)
	@ResponseBody
	public String uploadFileHandler(@RequestParam("file") MultipartFile file, @RequestParam("page") String page) {
		
		if (!file.isEmpty()) {
			
			String type = file.getContentType();
			System.out.println("File type is given as: " + type);
			String extension = type.split("/")[1];
			System.out.println("File type is: " + extension);
			
			String name = new SimpleDateFormat("yMdhhmmss").format(new Date()) + "." + extension;
			
			String folder = null;
			
			switch(page) {
				case "manage-users": folder = "users"; 
				case "user-details": folder = "users";
				case "settings": folder = "users"; break;
				case "manage-visitors": folder = "visitors"; 
				case "visitor-details": folder = "visitors"; break;
			}
			
			
			try {
				byte[] bytes = file.getBytes();

				
				//String rootPath = System.getProperty("catalina.home");
				File dir = new File(getRoot() + File.separator + ((folder == null) ? "default" : folder ) + File.separator + "images");
				if (!dir.exists())
					dir.mkdirs();
				
				String filePath = dir.getAbsolutePath()	+ File.separator + name;
				File serverFile = new File(filePath);
				System.out.println("File saved here: " + filePath);
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();

				System.out.println( "You successfully uploaded file: " + name);
				
				return filePath;
				
			} catch (Exception e) {
				System.out.println("You failed to upload " + name + " => " + e.getMessage());
			}
		} else {

			System.out.println("You failed to upload file because the file was empty.");
		}
		
		
		return null;
	}
}