/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import config.YamlConfig;

/**
 *
 * @author Razor
 */
public class Get_Location_From_IP {
    public Location_Use_Bean get_ip_Details(String ip) {
        String key = YamlConfig.config.server.IPINFODB_KEY;
        ip = ip.trim();
        Location_Use_Bean obj_Location_Use_Bean = new Location_Use_Bean();
        // System.out.println("The ip adress is before " + ip + "  split");
        try {
            if (ip.contains(",")) {
                String temp_ip[] = ip.split(",");
                ip = temp_ip[1].trim();
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
        // System.out.println("The ip adress is after " + ip + " split");
        URL url;
        try {
            url = new URL("https://api.ipinfodb.com/v3/ip-country/?key=" + key + "&ip=" + ip);
            BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream()));
            String strTemp = "";
            String temporaray = "";
            String temp_array[] = null;
            while (null != (strTemp = br.readLine())) {
                temporaray = strTemp;
            }
            temp_array = temporaray.split(";");
            // System.out.println("Str length is " + temp_array.length);
            int length = temp_array.length;
           
            if (length == 5) {
                obj_Location_Use_Bean.setIp_address(ip);
                if (temp_array[3] != null) {
                    obj_Location_Use_Bean.setCountry_code(temp_array[3]);
                }
                if (temp_array[4] != null) {
                    obj_Location_Use_Bean.setCountry(temp_array[4]);
                }
                // if (temp_array[5] != null) {
                //     obj_Location_Use_Bean.setState(temp_array[5]);
                // }
                // if (temp_array[6] != null) {
                //     obj_Location_Use_Bean.setCity(temp_array[6]);
                // }
                // if (temp_array[7] != null) {
                //     obj_Location_Use_Bean.setZip(temp_array[7]);
                // }
                // if (temp_array[8] != null) {
                //     obj_Location_Use_Bean.setLat(temp_array[8]);
                // }
                // if (temp_array[9] != null) {
                //     obj_Location_Use_Bean.setLon(temp_array[9]);
                // }
                // if (temp_array[10] != null) {
                //     obj_Location_Use_Bean.setUtc_offset(temp_array[10]);
                // }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return obj_Location_Use_Bean;
    }
}
