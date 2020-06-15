// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    private ArrayList<String> comments = new ArrayList<String>();

  // Returns comments in JSON format
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");
    String json = convertToJson(this.comments);
    response.getWriter().println(json);
  }

  // Takes incoming comments and adds them to list
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String text = getParameter(request, "text-comment", "");

    // Add new comment only if the string is more than just white spaces
    if(text.trim().length() > 0){
      comments.add(text);
    }

    response.sendRedirect("/index.html");
  }

    /**
    * Converts an ArrayList into a JSON string using the Gson library.
    */
    private String convertToJson(ArrayList arr) {
      Gson gson = new Gson();
      String json = gson.toJson(arr);
      return json;
    }

    /**
    * Get parameter value in HTTP request.
    */
    private String getParameter(HttpServletRequest request, String name, String defaultValue) {
      String value = request.getParameter(name);
      if (value == null) {
          return defaultValue;
        }
      return value;
    }
}
