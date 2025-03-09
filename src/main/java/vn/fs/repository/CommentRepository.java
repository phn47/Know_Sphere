package vn.fs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vn.fs.entities.Comment;

/**
 * @author BookStore
 *
 */
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

}
