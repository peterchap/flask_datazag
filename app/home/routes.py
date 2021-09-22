# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""
import pandas as pd
from app.home import blueprint
from flask import render_template, redirect, url_for, request
from flask_login import login_required, current_user
from app import login_manager
from jinja2 import TemplateNotFound

directory = "C:/Users/Peter/Downloads/"
file = "dq1.csv"

df = pd.read_csv(directory + file, encoding="utf-8", low_memory=False)


@blueprint.route("/index")
@login_required
def index():

    return render_template("index.html", segment="index")


@blueprint.route("/tabletest")
@login_required
def html_table():

    return render_template(
        "tabletest.html",
        tables=[
            df.to_html(
                index=False,
                col_space=200,
                justify="left",
                border=0,
                bold_rows=True,
                classes=["thread-light" "table-hover"],
                header="true",
            )
        ],
    )


@blueprint.route("/<template>")
@login_required
def route_template(template):

    try:

        if not template.endswith(".html"):
            template += ".html"

        # Detect the current page
        segment = get_segment(request)

        # Serve the file (if exists) from app/templates/FILE.html
        return render_template(template, segment=segment)

    except TemplateNotFound:
        return render_template("page-404.html"), 404

    except:
        return render_template("page-500.html"), 500


# Helper - Extract current page name from request
def get_segment(request):

    try:

        segment = request.path.split("/")[-1]

        if segment == "":
            segment = "index"

        return segment

    except:
        return None
