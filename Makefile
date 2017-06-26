# @desandro only

zip:
	rm -rf build/infinite-scroll-docs.zip
	cp -r build infinite-scroll-docs
	zip -rq build/infinite-scroll-docs.zip infinite-scroll-docs/
	rm -rf infinite-scroll-docs

deploy:
	s3cmd -c ~/.s3cfg-fizzy sync --cf-invalidate build/. s3://infinite-scroll.com

gulp:
	gulp

gulp-export:
	rm -rf build/
	gulp export
	make zip

prod: gulp-export gulp deploy
