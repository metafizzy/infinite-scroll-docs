# @desandro only

zip:
	rm -rf build/episcroll-docs.zip
	cp -r build episcroll-docs
	zip -rq build/episcroll-docs.zip episcroll-docs/
	rm -rf episcroll-docs

deploy:
	s3cmd -c ~/.s3cfg-fizzy sync --cf-invalidate build/. s3://mfzy.co/episcroll-docs/

gulp:
	gulp

gulp-export:
	rm -rf build/
	gulp export
	make zip

prod: gulp-export gulp deploy
