package org.scoan.visitors;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class PDFUpload {
	
//	public static void main(String[] args) {
//		System.out.println("actualLocation: " + getPDFFile("http://localhost:8080/Applications/tomcat/pdf/2017-11-18.pdf"));
//	}
		
	public static byte[] getPDFFile(String loc) {
		String actualLocation = loc.split("8080")[1];
		
		Path path = Paths.get(actualLocation);
		
		try {
			byte[] fileBytes = Files.readAllBytes(path);
			return fileBytes;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
}
